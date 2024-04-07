import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IFinishes } from 'src/app/_Interfaces/IFinishes';
import { IMachine } from 'src/app/_Interfaces/IMachine';
import { UserForm } from 'src/app/_Interfaces/UserForm';
import { CrudfinishesService } from 'src/app/_services/_maker/_machine/crudfinishes.service';
import { CrudmachineService } from 'src/app/_services/_maker/_machine/crudmachine.service';

@Component({
  selector: 'app-machines-materiel',
  templateUrl: './machines-materiel.component.html',
  styleUrls: ['./machines-materiel.component.css']
})
export class MachinesMaterielComponent implements OnInit {

  POSTS: any;
  pageSize =4;
  currentpage=1;


  newMachine: IMachine = { // Doit être `newMachine` pas `IMachine`
    idMachine:0,
    name: '',
    process: '',
    troisPrinting: '',
    pricePerHour: 0, // Les nombres doivent être initialisés avec des nombres, pas des chaînes
    currency: '',
    materials: [], // Un tableau vide si aucun matériau n'est sélectionné
    travelPerX: 0,
    travelPerY: 0,
    travelPerZ: 0,
    user: {} as UserForm // Supposer que UserForm a aussi une structure définie ailleurs
  };

  currentMachine: IMachine = { // Doit être `newMachine` pas `IMachine`
    idMachine:0,
    name: '',
    process: '',
    troisPrinting: '',
    pricePerHour: 0, // Les nombres doivent être initialisés avec des nombres, pas des chaînes
    currency: '',
    materials: [], // Un tableau vide si aucun matériau n'est sélectionné
    travelPerX: 0,
    travelPerY: 0,
    travelPerZ: 0,
    user: {} as UserForm // Supposer que UserForm a aussi une structure définie ailleurs
  };


  

  //for getAllMachine
  machines: IMachine[] = []; // pour stocker les machines


  currencies = ['TND', 'EUR', 'USD', 'CNY', 'CBP', 'EGP', 'XAF', 'KWD', 'MAD', 'AED', 'DZD', 'CAD'];
  materials = ['acrylic', 'Stainless steel 304/ 1.4301 / X5CrN118.10 /V2A', 'Flex TPU', 'PETG','NYLON12 / PA 12 (FDM)', 'TPU (polyurethane)', 'TPU (Polyurethane)', 'Standard White, AB-like:','Standard Heat resistant, PC-like','Standard ESD, ABS-like', 'Standard Durable, PP-like / Pliable', 'UMA 90', 'DRP 10', 'EPX 82', 'FPU 50', 'Industrial White, ABS-like', 'ULTEM 9085', 'PC (Polycarbonate)', 'Industrial Heat resistant, PC-like', 'PC ISO (Polycarbonate ISO 10993 USP Classe VI', 'ABS-ESD','Photopolymer, rigid', 'PLA', 'ABS', 'ASA', 'Standard Transparent,ABS-like','Nylon 12 (PA 12) glass-filled', 'PA 12 Food Grade', 'PA 12 Food Grade', 'PA 11 Food Grade','Nylon 12 full-colour /CB PA 12', 'ABS M30' ,'Polypropylene (PP)', 'CE 221 (Cyanatester)', 'RPU 70', 'Industrial Grey, ABS-like','Industrial Transparent, ABS-like', 'ULTEM 1010 ', 'PC-ABS Polycarbonate'];
  showCustomMaterialInput: boolean = false;
  customMaterial: string = '';

  availableProcesses: string[] = [];
  machinesByProcess: IMachine[] = [];
  

  public machineIdToDelete: number | null = null;
//pour laffichage de count
  public totalMachinesCount = 0;
  public troisPrintingCount = 0;
  public cncMachinesCount = 0;
  public laserCuttingCount = 0; 

  //
  selectedMaterial: string = '';

  prepareUpdate(machine: IMachine) {
    this.currentMachine = Object.assign({}, machine); // Cloner l'objet machine pour éviter les mutations directes
    // Ouvrez ici le modal de mise à jour si nécessaire
  }
  updateMaterialSelection() {
    // Assurez-vous que materials est initialisé comme un tableau.
    this.currentMachine.materials = [this.selectedMaterial];
  }
  
  
  submitMachineForm() {
    // Vérifier si currentMachine n'est pas null avant de continuer
    if (this.currentMachine && this.currentMachine.idMachine) {
      this.crudMachineService.updateMachine(this.currentMachine.idMachine, this.currentMachine).subscribe({
        next: (updatedMachine) => {
          const index = this.machines.findIndex(m => m.idMachine === this.currentMachine?.idMachine);
          if (index !== -1) {
            this.machines[index] = updatedMachine;
            // Vous devrez peut-être réassigner la liste pour que le changement soit détecté par Angular
            this.machines = [...this.machines];
          }
          this.toastr.success('Machine updated successfully');
          // Fermez le modal ici si nécessaire
        },
        error: (error) => {
          console.error('Error updating machine', error);
          this.toastr.error('Error updating machine');
        }
      });
    } else {
      this.toastr.error('No machine selected for update');
    }
  }
  
  


  prepareDelete(id: number) {
    this.machineIdToDelete = id; // Stocke l'ID de la machine à supprimer
  }
  


  showCustomMaterialField() {
    this.showCustomMaterialInput = true;
  }

  addCustomMaterial() {
    if (this.customMaterial.trim() !== '') {
      // Ajouter le nouveau matériau à la liste des matériaux existants
      this.materials.push(this.customMaterial);
  
      // Vérifier si 'newMachine.materials' est défini et est un tableau, sinon initialiser un nouveau tableau
      if (!this.newMachine.materials) {
        this.newMachine.materials = [];
      }
      
      // Ajouter le nouveau matériau au tableau des matériaux de la nouvelle machine
      this.newMachine.materials.push(this.customMaterial);
  
      // Réinitialiser le champ de saisie et cacher le champ de saisie
      this.customMaterial = '';
      this.showCustomMaterialInput = false;
    }
  }
  
  constructor(private http: HttpClient ,
              private crudMachineService: CrudmachineService  ,
              private toastr: ToastrService,
              private crudFinishesService: CrudfinishesService
      
    ) {}


  ngOnInit(): void {
    this.fetchMachines();
    this.fetchAvailableProcesses();
    this.fetchMachineCounts();
    this.fetchFinishes(); 


      
  }
  selectedMachineId: number | null = null;

  addNewMachine() {
    if (this.newMachine) {
      this.crudMachineService.addMachine(this.newMachine).subscribe({
        next: (machine) => {
          this.toastr.success('Machine added successfully');
          // Add any other logic after successful submission
          this.fetchMachines();
          this.fetchMachineCounts();


        },
        
        error: (error) => {
          console.error('Error adding machine', error);
          this.toastr.error('Machine error');
        }
      });
    }
  }
  fetchMachines(): void {
    this.crudMachineService.getAllMachine().subscribe({
      next: (machines) => {
        this.machines = machines; // Stockez les machines retournées ici
      },
      error: (error) => {
        console.error('Error fetching machines', error);
        this.toastr.error('Error fetching machines');
      }
    });
  }

  fetchAvailableProcesses(): void {
    this.crudMachineService.getAvailableProcesses().subscribe({
      next: (processes) => {
        this.availableProcesses = processes;
      },
      error: (error) => {
        console.error('Error fetching processes', error);
        this.toastr.error('Error fetching processes');
      }
    });
  }

  onProcessChange(selectedProcess: string) {
    this.crudMachineService.getMachinesByProcess(selectedProcess).subscribe({
      next: (machines) => {
        this.machinesByProcess = machines;
      },
      error: (error) => {
        console.error('Error fetching machines by process', error);
        this.toastr.error('Error fetching machines by process');
      }
    });
  }

  addMaterialToSelectedMachine() {
    // Initialisation de la variable selectedMaterial
    let selectedMaterial: string = '';
  
    // Si l'utilisateur a entré un nouveau matériau dans l'input, utilisez cette valeur
    if (this.showCustomMaterialInput && this.customMaterial) {
      selectedMaterial = this.customMaterial;
    } 
    // Sinon, si un matériau a été sélectionné dans le dropdown, utilisez cette valeur
    else if (this.newMachine.materials && this.newMachine.materials.length) {
      selectedMaterial = this.newMachine.materials.toString(); // Convertit le tableau en chaîne de caractères séparée par des virgules
    }
  
    // Vérifiez si un ID de machine et un matériau ont été sélectionnés
    if (this.selectedMachineId && selectedMaterial) {
      // Appel au service pour ajouter le matériau à la machine sélectionnée
      this.crudMachineService.addMaterialToMachine(this.selectedMachineId, selectedMaterial).subscribe({
        next: (machine) => {
          this.toastr.success('Material added successfully to the machine');
          this.fetchMachines(); // Rafraîchissez votre liste de machines


          // Mettez ici à jour l'interface utilisateur comme nécessaire
          // Par exemple, rafraîchissez la liste des machines si la liste des matériaux est affichée à l'utilisateur
        },
        error: (error) => {
          console.error('Error adding material to machine', error);
          this.toastr.error('Error adding material to machine');
        }
      });
    } else {
      // Affichez une erreur si aucun ID de machine ou matériau n'a été sélectionné
      this.toastr.error('Please select a machine and a material');
    }
  }
  
  confirmDelete() {
    if (this.machineIdToDelete) {
      this.crudMachineService.deleteMachine(this.machineIdToDelete).subscribe({
        next: () => {
          this.toastr.success('Machine deleted successfully');
          this.fetchMachines(); // Rafraîchissez votre liste de machines
          this.fetchMachineCounts();

          this.machineIdToDelete = null; // Réinitialisez l'ID de la machine à supprimer
          // Fermez la modal manuellement si nécessaire
        },
        error: (error) => {
          console.error('Error deleting machine', error);
          this.toastr.error('Error deleting machine');
          this.machineIdToDelete = null; // Réinitialisez l'ID de la machine à supprimer
        }
      });
    }
  }
  
  fetchMachineCounts(): void {
    this.crudMachineService.countAllMachines().subscribe(count => this.totalMachinesCount = count);
    this.crudMachineService.countMachinesByTroisPrinting().subscribe(count => this.troisPrintingCount = count);
    this.crudMachineService.countMachinesByCncMachining().subscribe(count => this.cncMachinesCount = count);
    this.crudMachineService.countMachinesByLaserCutting().subscribe(count => this.laserCuttingCount = count);
  }


 //finshes ici -----------------------------------------------------------------:

 currentpageFinish=1;
 pageSizeFinish=4;


 finishes: IFinishes[] = [];


 selectedFinishes: string[] = [];
 onProcessChangeFinishes(selectedProcess: string) {
  switch (selectedProcess) {
    case 'TROIS_PRINTING':
      this.selectedFinishes = this.NameFinishesTROIS_PRINTING;
      break;
    case 'CNC_MACHINING':
      this.selectedFinishes = this.NameFinishesCNC_MACHINING;
      break;
    case 'LASER_CUTTING':
      this.selectedFinishes = this.NameFinishesLASER_CUTTING;
      break;
    default:
      this.selectedFinishes = [];
  }
}





newFinishes: IFinishes = {
  idFinishes: 0,
  process: '',
  name: '', // Initialisation ici comme tableau vide
  user: {} as UserForm,
};





 NameFinishesTROIS_PRINTING = ['Sand and Polish','Support Removal','Resin coating','Acetone Vapor Smoothing', 'Coating and Sealing', 'Dyeing and Coloring'];
 NameFinishesCNC_MACHINING = ['Superfinishing','High-Speed Machining (HSM)'];
 NameFinishesLASER_CUTTING = ['Laser Polishing', 'Laser Cleaning','Surface Texturing', 'Laser Surface Structures'];


 addFinish() {
  if (this.newFinishes.process && this.newFinishes.name) {
    this.crudFinishesService.addFinishes(this.newFinishes).subscribe({
      next: (result) => {
        this.toastr.success('Finish added successfully');
        this.fetchFinishes(); 
        console.log(result);
        // Réinitialisation pour une nouvelle saisie ou autres actions post-succès
      },
      error: (error) => {
        console.error('Error adding finish', error);
        this.toastr.error('Error adding finish');
      }
    });
  } else {
    // Gestion des cas où le processus ou le nom n'est pas sélectionné
    this.toastr.error('Process and finish must be selected');
  }
}

 
fetchFinishes(): void {
  this.crudFinishesService.getAllIFinishes().subscribe({
    next: (finishes) => {
      this.finishes = finishes;
    },
    error: (error) => {
      console.error('Error fetching finishes', error);
      this.toastr.error('Error fetching finishes');
    }
  });
}

deleteFinishes(id: number) {
  this.crudFinishesService.deleteFinishes(id).subscribe({
    next: () => {
      this.toastr.success('Finish deleted successfully');
      this.fetchFinishes(); // Rafraîchissez la liste des finitions
    },
    error: (error) => {
      console.error('Error deleting finish', error);
      this.toastr.error('Error deleting finish');
    }
  });
}


//search
searchTerm: string = '';

searchTermChange(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  this.searchTerm = value;
}


  
}




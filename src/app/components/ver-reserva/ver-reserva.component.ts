import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-ver-reserva',
  standalone: true,
  templateUrl: './ver-reserva.component.html',
  styleUrls: ['./ver-reserva.component.css'],
  imports: [HeaderComponent],
})
export class VerReservaComponent implements OnInit {
  reserva: any;

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute
  ) {}

   ngOnInit() {
    const codigoReserva = this.route.snapshot.paramMap.get('codigoReserva');
    
    // Verifica se o codigoReserva não é null antes de chamar o método
    if (codigoReserva !== null) {
      this.reserva = this.reservaService.getReservaByCodigo(codigoReserva);
    } else {
      console.error('Código da reserva não fornecido');
      // Trate o caso onde não há código de reserva, por exemplo, exibir uma mensagem de erro para o usuário
    }
  }
}




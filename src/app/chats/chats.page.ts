import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: false
})
export class ChatsPage implements OnInit {

  chats: any[] = [
    { username: 'Andrea M.', message: 'Hola, ¿cómo estás?', date: '08:30', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Carlos G.', message: '¿Nos vemos mañana?', date: '09:15', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Lucía R.', message: 'No olvides la reunión de hoy.', date: '10:05', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Fernando P.', message: 'Listo para la presentación.', date: '11:45', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Sofía L.', message: '¿Te paso los apuntes?', date: '12:10', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Raúl M.', message: 'Voy en camino.', date: '12:50', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Gabriela O.', message: 'Gracias por tu ayuda.', date: '13:30', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'David S.', message: '¿Qué tal el fin de semana?', date: '14:00', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Elena J.', message: 'Necesito tu opinión sobre esto.', date: '14:40', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Miguel F.', message: 'Genial, nos vemos luego.', date: '15:15', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Paula Z.', message: 'Voy a enviarte los documentos.', date: '15:45', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Javier N.', message: '¿Cuándo nos reunimos?', date: '16:20', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Marta V.', message: '¿Cómo salió el examen?', date: '17:10', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Sergio D.', message: 'Nos vemos a las 6.', date: '17:50', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Isabel T.', message: 'Tengo una duda sobre el proyecto.', date: '18:30', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Alberto C.', message: '¡Feliz cumpleaños!', date: '19:05', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Natalia K.', message: '¿Has visto la última película?', date: '19:45', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Rodrigo B.', message: 'Mañana tengo libre.', date: '20:20', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Clara X.', message: 'Gracias por la recomendación.', date: '21:00', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Tomás H.', message: 'Recibí tu mensaje.', date: '21:30', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Valeria Y.', message: 'Espero que estés bien.', date: '22:10', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Esteban J.', message: 'Mándame el enlace.', date: '22:45', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Patricia L.', message: 'Te llamo más tarde.', date: '23:15', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Ricardo P.', message: 'Nos vemos en el café.', date: '23:50', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Marina F.', message: 'Dale, me avisas.', date: '00:25', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Joaquín E.', message: 'Estoy en camino.', date: '01:00', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Beatriz N.', message: 'Lo reviso y te aviso.', date: '01:35', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Gonzalo Q.', message: 'No hay problema.', date: '02:10', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Susana W.', message: 'Déjame ver qué puedo hacer.', date: '02:50', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Álvaro R.', message: 'Gracias por el dato.', date: '03:25', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];
  
  
  constructor() { }

  ngOnInit() {
  }

}

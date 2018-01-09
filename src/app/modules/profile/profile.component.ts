import {Component, OnInit} from '@angular/core';
import {Profile} from "../../model/profile";

@Component({
  selector: 'lazuly-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    private profile:Profile;

    private editSummary:boolean;
    private editBasic:boolean;
    constructor() {}

    ngOnInit() {
      this.profile = new Profile();
      this.profile.last_name = 'Pasut';
      this.profile.first_name = 'Marcelo';
      this.profile.job_title = 'Ingeniero';
      this.profile.email = 'pasutmarcelo@gmail.com';
      this.profile.image = 'https://scontent.faep4-1.fna.fbcdn.net/v/t1.0-9/24296542_1729569600389525_4515378176498100024_n.jpg?oh=ceda880769d49f8d05d7994225ed9ef7&oe=5AEB847C';
      this.profile.summary = 'Andabamos sin buscarnos, pero sabiendo que andabamos para encontrarnos';
      this.profile.phone = '15-6408-0807';
      this.profile.contact_email = 'pasutmarcelo@gmail.com';
      this.profile.facebook = 'marcelo.pasut';
      this.profile.skype = 'mpasut';
      this.profile.twitter = '@LaMaldicionDeMandos';
      this.profile.address = 'Lavalleja 1745, Quilmes Buenos Aires';
    }

    changeSummary() {
      console.log('Change summary');
      this.editSummary = false;
    }

}

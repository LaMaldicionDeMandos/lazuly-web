import {Component, OnInit} from '@angular/core';
import {Profile} from "../../model/profile";

@Component({
  selector: 'lazuly-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    private profile:Profile;

    private form:Profile;

    private editSummary:boolean;
    private editBasic:boolean;
    private editContact:boolean;

    constructor() {}

    ngOnInit() {
      this.profile = new Profile();
      this.profile.last_name = 'Pasut';
      this.profile.first_name = 'Marcelo';
      this.profile.job_title = 'Ingeniero';
      this.profile.email = 'pasutmarcelo@gmail.com';
      this.profile.image = 'https://scontent.faep4-1.fna.fbcdn.net/v/t1.0-9/24296542_1729569600389525_4515378176498100024_n.jpg?oh=ceda880769d49f8d05d7994225ed9ef7&oe=5AEB847C';
      this.profile.summary = 'Andabamos sin buscarnos, pero sabiendo que andabamos para encontrarnos';
      this.profile.bird_date = '31/03/1981';
      this.profile.phone = '15-6408-0807';
      this.profile.contact_email = 'pasutmarcelo@gmail.com';
      this.profile.facebook = 'marcelo.pasut';
      this.profile.skype = 'mpasut';
      this.profile.twitter = '@LaMaldicionDeMandos';
      this.profile.address = 'Lavalleja 1745, Quilmes Buenos Aires';

      this.form = new Profile();
      this.copyProfile(this.profile, this.form);
    }

    private copyProfile(origin:Profile, target:Profile):void {
      target.last_name = origin.last_name;
      target.first_name = origin.first_name;
      target.job_title = origin.job_title;
      target.image = origin.image;
      target.summary = origin.summary;
      target.bird_date = origin.bird_date;
      target.phone = origin.phone;
      target.contact_email = origin.contact_email;
      target.facebook = origin.facebook;
      target.skype = origin.skype;
      target.twitter = origin.twitter;
      target.address = origin.address;
    }

    private copySummary(origin:Profile, target:Profile):void {
      target.summary = origin.summary;
    }

    private copyBasic(origin:Profile, target:Profile):void {
      target.last_name = origin.last_name;
      target.first_name = origin.first_name;
      target.job_title = origin.job_title;
      target.bird_date = origin.bird_date;
    }

    private copyContact(origin:Profile, target:Profile):void {
      target.phone = origin.phone;
      target.contact_email = origin.contact_email;
      target.facebook = origin.facebook;
      target.skype = origin.skype;
      target.twitter = origin.twitter;
      target.address = origin.address;
    }

    change(target:string):void {
      console.log(`Change ${target}`);
      this[`copy${target}`](this.form, this.profile);
      this[`edit${target}`] = false;
      //TODO send to backend
    }

    cancel(target:string):void {
      console.log(`Cancel ${target}`);
      this[`copy${target}`](this.profile, this.form);
      this[`edit${target}`] = false;
    }

}

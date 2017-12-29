import {Role} from "./role";
import _ from "lodash";
/**
 * Created by boot on 21/12/2017.
 */
export class User {
  last_name: string;
  first_name: string;
  job_title: string;
  email: string;
  image: string;
  roles: Role[];

  printRoles():string {
    return _.chain(this.roles).map((role) => role.name).join(', ').value();
  }


  hasRole(role:Role):boolean {
    return _.some(this.roles, (r) => r.code == role.code);
  }
}

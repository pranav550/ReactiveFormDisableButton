import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angular12";
  form = new FormGroup(
    {
      organizationId: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern("^[0-9]+$")
      ]),
      organizationName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      country: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$"
        )
      ]),
      cpassword: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$"
        )
      ])
    },

    // this.passwordMatchValidator()
  );
  isMatch = false;
  // passwordMatchValidator() {
  //   return this.form.get("password").value === this.form.get("cpassword").value
  //     ? null
  //     : { this.isMatch= true };
  // }
  constructor(private ngFlashMessageService: NgFlashMessageService) {}

  get firstname() {
    return this.form.get("firstName");
  }
  ngOnInit() {}
  passwordChange() {
    this.form.get("password").value === this.form.get("cpassword").value
      ? (this.isMatch = false)
      : (this.isMatch = true);
  }
  onSubmit() {
    this.ngFlashMessageService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ["Form Successfully Submitted"], 
      // Whether the flash can be dismissed by the user defaults to false
      // dismissible: true, 
      // Time after which the flash disappears defaults to 2000ms
      // timeout: false,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'success'
    });
    console.log(JSON.stringify(this.form.value));
    this.form.reset();
  }
}

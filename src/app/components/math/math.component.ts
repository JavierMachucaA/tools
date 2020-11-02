import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNumbersHandler } from '../../handlers/prime-numbre-handler';

@Component({
  selector: 'math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
  private primeNumbersHandler : PrimeNumbersHandler ;
  public listPrime = [];

  public customForm: FormGroup;
  public topNumber: number = 1;
  public customOptions = false;

  constructor(private formBuilder: FormBuilder) { 
    this.primeNumbersHandler = new PrimeNumbersHandler();
    this.listPrime = this.primeNumbersHandler.getPrimeNumbers();
  }

  ngOnInit(): void {
    this.customForm = this.formBuilder.group({
      topNumber: [null, Validators.pattern("^[0-9]*$"),],
      countPrimes: [null,Validators.pattern("^[0-9]*$") ,],
    });
  }

  public getStringList(){
    return this.listPrime.join(',');    
  }

  submit() {
    if (!this.customForm.valid) {
      return;
    }
    const prime = Number.parseInt(this.customForm.value.topNumber);
    const countPrimes = Number.parseInt(this.customForm.value.countPrimes);
    this.listPrime = this.primeNumbersHandler.getPrimeNumbers(prime,countPrimes);
    
  }

}

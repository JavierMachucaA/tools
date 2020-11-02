export class PrimeNumbersHandler extends EventTarget {

    private iterator;
    private listNumbersPrime = [];
    private limit ;
    private limitCountPrimeNumbers ;
    private readonly LIMIT_DEFAULT = 10;

    /**
     * Get n prime numbers by limit number or limit of count prime numbres
     * @param topLimit 
     * @param limitCountPrimeNumbres 
     */
    public getPrimeNumbers (topLimit ?: number , limitCountPrimeNumbres? : number): number[] {
        this.listNumbersPrime = [];
        this.iterator = 1;
        if (topLimit){
             this.limit = topLimit;
        }

        if (limitCountPrimeNumbres){
            this.limitCountPrimeNumbers = limitCountPrimeNumbres;
        }
        console.log("topLimit: ",topLimit);
        
        while (this.getContitions ()) {

            let countDivisible = 0;
            for (let index = 1 ; index <= this.iterator ; index++) {
                if (this.iterator % index == 0) {
                    if (countDivisible <= 2) {
                        countDivisible++;
                    } else { 
                        break;
                    }
                }
                // console.log('asd : ', i, 'index:',index);
            }
            if (countDivisible == 2){
                this.listNumbersPrime.push(this.iterator);
            }
            this.iterator++;
        }
        return this.listNumbersPrime;
    }

    private getContitions () : boolean{
        if (!this.limit && !this.limitCountPrimeNumbers)
        {
            this.limit = this.LIMIT_DEFAULT;
        }

        if (this.limit && this.limitCountPrimeNumbers){
            return this.iterator <= this.limit &&  this.listNumbersPrime.length <= this.limitCountPrimeNumbers;
        }

        if (this.limit && !this.limitCountPrimeNumbers) {
            return this.iterator <= this.limit;
        }

        if (!this.limit && this.limitCountPrimeNumbers) {
            return this.listNumbersPrime.length <= this.limitCountPrimeNumbers;
        }
    }
}
class Conta{
    private agencia: string 
    private numConta: string;
    private readonly saldo: number;

    constructor(agencia: string, numConta: string, saldo: number){
        this.agencia = agencia;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    get getAgencia(){
        return this.agencia
    }
    get getConta(){
        return this.numConta;
    }
    get getSaldo(){
        return this.saldo;
    }
    set setAgencia(agencia: string){
        this.agencia = agencia;
    }

    set setConta(numConta: string){
        this.numConta = numConta;
    }


}

const conta = new Conta("001", "1234", 2200);

console.log(`Agencia: ${conta.getAgencia}`);
console.log(`Conta: ${conta.getConta}`);
console.log(`Saldo: ${conta.getSaldo}`);

console.log("------------------------------");
conta.setAgencia = "235";
conta.setConta = "12536";

console.log(`Agencia: ${conta.getAgencia}`);
console.log(`Conta: ${conta.getConta}`);
console.log(`Saldo: ${conta.getSaldo}`);





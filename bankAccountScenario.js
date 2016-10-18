function bankAccount{
	//polymorphism
	constructor(name, balace){
		
		this.balance = balance
		this.name = name
		thi.info = function(){
			return this.name + "Account balance is " + this.balance
		}
		
		this.withdraw() = function(){	
		}
		
		this.deposit() = function(){
				
		}
	}
	//inheritance
	class SavingsAccount extends bankAccount{
		
		//an account holder can withdraw and deposit money into their account
		
		this.withdraw() = function(){	
		}
		
		this.deposit() = function(){
				
		}
	}
	
	class CurrentAccount extends bankAccount{
		
		//can withdraw
		//can deposit an amount of money
		
		this.withdraw() = function(){
				
		}
		
		this.deposit() = function(){	
			
		}
	}
	
}

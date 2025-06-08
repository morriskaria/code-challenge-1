function calculateChaiIngredient() {
    
    const numberOfCups = prompt("Eenter the number of Chai cups you want to make:");
    const numCups = Number(numberOfCups);


     if(isNaN(numberOfCups) || numberOfCups <= 0) {
        console.error("please enter a valid positive number.");
        return ;

     }
     
     const WATER_PER_CUP = 200; 
     const MILK_PER_CUP = 50;
     const TEA_LEAVES_PER_CUP = 1;
     const SUGAR_PER_CUP = 2;


     const totalWater = WATER_PER_CUP * numberOfCups;
     const totalMilk =MILK_PER_CUP * numberOfCups;
     const totalTea = TEA_LEAVES_PER_CUP * numberOfCups;
     const totalSugar = SUGAR_PER_CUP  * numberOfCups;

console.log("------------");
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves !== 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar !== 1 ? 's' : ''}`);
    console.log("---------------------------------");
    console.log("Karibu sana! Enjoy your chai!\n");
}
 calculateChaiIngredient();

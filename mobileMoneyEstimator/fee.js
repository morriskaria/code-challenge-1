function estimateTransactionFee() {

    const input = prompt("Unatuma Ngapi? (KES):");
    const amountToSend = parseFloat(input);
    
    
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Tafadhali weka kiasi halali cha pesa.");
        return;
    }
    
   
    const calculatedFee = amountToSend * 0.015;
    const transactionFee = Math.min(Math.max(calculatedFee, 10), 70);
    
    
    const totalDebit = amountToSend + transactionFee;
    
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee.toFixed(2)}`);
    console.log(`Total amount to be debited: KES ${totalDebit.toFixed(2)}`);
    console.log("\nSend Money Securely!");
}


function estimateTransactionFeeParam(amountToSend) {
    if (isNaN(amountToSend) || amountToSend <= 0) return "Invalid amount";
    
    const fee = Math.min(Math.max(amountToSend * 0.015, 10), 70);
    return {
        amount: amountToSend,
        fee: fee,
        total: amountToSend + fee
    };
}
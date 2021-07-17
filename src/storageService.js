export const storageService = {
    
    setItems(items) {
        
        const paymentsJson = JSON.stringify(items);
        localStorage.setItem('payments', paymentsJson);
    },
    getItems() {
        debugger
        const paymentsJson = localStorage.getItem('payments')
        return paymentsJson ? JSON.parse(paymentsJson) : [];
    }
}
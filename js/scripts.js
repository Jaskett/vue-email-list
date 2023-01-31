const { createApp } = Vue

createApp({
    data() {
        return {
            currEMail: '',
            emailArray: []
        }
    },
    created() {
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.currEMail = response.data.response;
                    this.emailArray.push(this.currEMail);
                })
        }
        console.log(this.emailArray);
    }
}).mount('#app')

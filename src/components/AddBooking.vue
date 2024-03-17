<!-- Component to add booking with form-->
<template>
    <section class="main-content">
        <div class="form-container">
            <h2>Fyll i dina uppgifter för att boka</h2>
            <!--Form with submit event and v-for-->
            <form @submit.prevent="addBooking">
                <!--Form validation messages -->
                <p class="message" v-if="BlankRegistration">
                    {{ BlankRegistration }}</p>
                <p class="message" v-if="success">
                    {{ success }}</p>
                <label for="bookingName">Namn:</label><br>
                <input type="text" id="bookingName" v-model="bookingName" placeholder="Förnamn Efternamn"><br>
                <label for="bookingEmail">Mejladress:</label><br>
                <input type="text" id="bookingEmail" v-model="bookingEmail" placeholder="mejl@exempel.se"><br>
                <label for="bookingPhone">Telefonnummer:</label><br>
                <input type="text" id="bookingPhone" v-model="bookingPhone" placeholder="07X- XXX XX XX"><br>
                <label for="bookingDate">Välj datum och tid för behandling:</label><br>
                <input type="datetime-local" id="bookingDate" v-model="bookingDate"><br>
                <label for="treatment">Välj en behandling:</label><br>
                <select id="treatment" v-model="selectedTreatment">
                    <option v-for="treatment in treatments" :value="treatment.id" :key="treatment.id">{{
                treatment.treatmentName }}</option>
                </select><br>
                <input type="submit" value="Boka">
            </form>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        //Set values to an empty string
        return {
            bookingName: '',
            bookingEmail: '',
            bookingPhone: '',
            bookingDate: '',
            treatmentId: '',
            selectedTreatment: '',
            treatments: [],
            availableTimes: [],
            success: "",
            BlankRegistration: ""
        };
    },
    created() {
        this.getTreatments();
    },
    methods: {
        //Get treatment with fetch 
        async getTreatments() {
            try {
                const response = await fetch('http://localhost:5108/api/treatment');
                //if response not ok, message
                if (!response.ok) {
                    throw new Error('Något gick fel vid hämtning av behandlingar');
                }
                const data = await response.json();
                this.treatments = data;
            } catch (error) {
                console.error('Det gick inte att hämta behandlingar: ', error);
            }
        },
        //Add booking
        async addBooking() {
            //Check for plank spaces and that all is filled in
            if (this.bookingName.trim() === '' || this.bookingEmail.trim() === '' ||
                this.bookingPhone.trim() === '' || this.bookingDate.trim() === '' ||
                this.selectedTreatment === null) {
                // Display an error message for blank spaces
                this.BlankRegistration = 'Fyll i alla fält';
                return;
            } else {
                this.BlankRegistration = ''; // Reset the error message
            }  //Save input-values
            let bookingBody = {
                bookingName: this.bookingName,
                bookingEmail: this.bookingEmail,
                bookingPhone: this.bookingPhone,
                bookingDate: this.bookingDate,
                treatmentId: this.selectedTreatment
            };
            //fetch post
            try {
                const resp = await fetch("http://localhost:5108/api/booking", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(bookingBody)
                }); //Check if respose ok and show message
                if (resp.ok) {
                    this.success = 'Tack för din bokning';
                    //Empty input fields
                    const data = await resp.json();
                    this.bookingName = "",
                        this.bookingEmail = "",
                        this.bookingPhone = "",
                        this.bookingDate = "",
                        this.selectedTreatment = ""
                } else { // if not ok, show message
                    this.success = "Bokningen misslyckades, försök igen";
                }
            } catch (error) {
                console.log("Error" + resp.status)
            }

        }
    }
}

</script>
<style scoped>
/*Desktop*/
/*form validation message*/
.message {
    font-size: 1.2em;
    color: blue;
    font-weight: bold;
}

/*Form*/
.form-container {
    justify-content: center;
    max-width: 600px;
    margin: 3em auto;
    padding: 2em 1em;
    background-color: #efe9e9;
    box-shadow: 0px 0px 5px 5px rgba(82, 81, 81, 0.098);
}

form {
    width: 100%;
    margin: auto;
    padding: 3em;
}

label {
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1em 0;
}

input[type=datetime-local],
input,
select,
option {
    font-size: 1.2em;
    padding: 0.2em 0;
    margin: 0.5em auto;
    width: 90%;
    max-width: 500px;
    box-shadow: 0px 0px 5px 5px rgba(82, 81, 81, 0.098);
    border: none;
}

input:focus,
select:focus,
option:focus {
    background-color: rgb(235, 230, 230);
}

input[type=submit] {
    width: 50%;
    padding: 0.5em 1em;
    margin: auto;
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 5%;
    box-shadow: 0px 0px 5px 5px rgba(82, 81, 81, 0.098);
}

input[type=submit]:hover {
    background-color: #333030;
}

/*align heading*/
h3 {
    text-align: center;
}

/*mobile*/
@media screen and (max-width: 600px) {
    form {
        width: 80%;
        padding: 0;
    }

    label {
        font-size: 1em;
    }

    input[type=datetime-local],
    input,
    select,
    option {
        font-size: 1em;
        width: 80%;
        padding: 0.5em 0em;

    }
}
</style>
import axios from "axios";
import { ref, onMounted } from 'vue';

export async function AddCase(data) {


        const token = localStorage.getItem('accessToken')
        const id = localStorage.getItem('id')

        const config = {

            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.post('/api/users/' + id + '/portfolio',
            data,
            config
        )
            .then((response) => {
                console.log(response);
            })

}
import axios from "axios";
import { ref, onMounted } from 'vue';

export function GetUser(id) {

    const portfolio = ref([])

    const fetching = async () => {

        const token = localStorage.getItem('accessToken')

        const config = {

            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.get('/api/users/' + id + '/portfolio',
            config
        )
            .then((response) => {
                portfolio.value = response.data
            })
    }

    onMounted(fetching)

    return portfolio

}
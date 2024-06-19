import axios from "axios";
import { ref, onMounted } from 'vue';

export function Marketers() {

    const portfolio = ref([])

    const fetching = async () => {

        const token = localStorage.getItem('accessToken')

        const config = {

            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.get('/api/marketers',
            config
        )
            .then((response) => {
                portfolio.value = response.data
            })
    }

    onMounted(fetching)

    return portfolio

}
import axios from "axios";
import { ref, onMounted } from 'vue';

export function GetUser(id) {

    const user = ref([])

    const fetching = async () => {

        const token = localStorage.getItem('accessToken')

        const config = {

            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.get('/api/users/' + id,
            config
        )
            .then((response) => {
                user.value = response.data
            })
    }

    onMounted(fetching)

    return user

}
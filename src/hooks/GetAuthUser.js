import axios from "axios";
import { ref, onMounted } from 'vue';

export function GetAuthUser() {

    const user = ref([])

    const token = localStorage.getItem('accessToken')

    const fetching = async () => {

        const config = {

            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.get('/api/auth/user',
            config
        )
            .then(function (response) {
                user.value = response.data
            })
    }

    onMounted(fetching)

    return user

}
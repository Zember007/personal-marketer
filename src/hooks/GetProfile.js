import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function GetUser(id) {

    const user = ref([])

    const router = useRouter()

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

            .catch((e) => {
                router.push('/404')
            })
    }

    onMounted(fetching)

    return user

}
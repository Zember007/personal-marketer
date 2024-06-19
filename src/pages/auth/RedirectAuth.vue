<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        async fetching (token) {
            const router = this.$router
            const config = {

                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.get('/api/auth/user',
                config
            )
                .then(function (response) {
                    router.push('/profile/'+response.data.id)
                })
        }

    },
    mounted() {
        localStorage.setItem('accessToken',this.$route.query.accessToken)
        this.fetching(this.$route.query.accessToken)
    }
}
</script>

<style lang="scss" scoped></style>
<template>
	<main class="container">
		<div class="col-md-6 col-md-offset-3">
			<section class="well">

				<header class="page-heading text-center">
					<h1 class="title">Register</h1>
				</header>

				<form @click.prevent="submit">
					
					<div class="form-group" :class="{ 'has-error': errors.name }">
						<label for="name" class="control-label">Name:</label>
						<input type="text" v-model="name" id="name" class="form-control">
						<span class="help-block" v-if="errors.name">
                            {{ errors.name[0] }}
                        </span>
					</div>

					<div class="form-group" :class="{ 'has-error': errors.email }">
						<label for="email" class="control-label">Email:</label>
						<input type="email" v-model="email" id="email" class="form-control">
						<span class="help-block" v-if="errors.email">
                            {{ errors.email[0] }}
                        </span>
					</div>

					<div class="form-group" :class="{ 'has-error': errors.password }">
						<label for="password" class="control-label">Password:</label>
						<input type="password" v-model="password" id="password" class="form-control">
						<span class="help-block" v-if="errors.password">
                            {{ errors.password[0] }}
                        </span>
					</div>
					
					<div class="form-group text-right">
						<button type="button" class="btn btn-primary">Register</button>
					</div>

				</form>	

			</section>
		</div>
	</main>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
        data () {
            return {
                name: null,
                email: null,
                password: null,
                errors: []
            }
        },
        methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            submit () {
                this.register({
                    payload: {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then( () => {
                    this.$router.replace({ 
                    	name: 'home' 
                   	})
                })
            }
        }
	}
</script>
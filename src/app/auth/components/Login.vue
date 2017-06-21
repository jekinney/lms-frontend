<template>	
	<main class="container">
		<div class="col-md-6 col-md-offset-3">
			<section class="well">
				
				<header class="page-heading text-center">
					<h1 class="title">Sign in</h1>
				</header>
				
				 <div class="alert alert-danger" v-if="errors.root">
                    {{ errors.root }}
                </div>

				<form>

					<div class="form-group" :class="{ 'has-error': errors.email }">
						<label for="email" class="control-label">Email:</label>
						<input type="email" v-model="email" id="email" class="form-control" autofocus="true">
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
					
					<div class="form-group">
						<router-link :to="{ name: 'requestPassword' }">Forgot Password?</router-link>
						<button type="button" @click="submit" class="btn btn-primary pull-right">Login</button>
					</div>

				</form>	

			</section>
		</div>
	</main>
</template>

<script>
    import { mapActions } from 'vuex'
    import localforage from 'localforage'
    import { isEmpty } from 'lodash'

    export default {
        data () {
            return {
                email: null,
                password: null,
                errors: []
            }
        },
        methods: {
            ...mapActions({
                login: 'auth/login'
            }),
            submit () {
                this.login({
                    payload: {
                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then(() => {
                    localforage.getItem('intended').then((name) => {
                        if (isEmpty(name)) {
                            this.$router.replace({ name: 'home' })
                            return
                        }

                        this.$router.replace({ name: name })
                    })
                })
            }
        }
    }
</script>

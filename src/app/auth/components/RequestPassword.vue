<template>
	<main class="container">
		<div class="col-md-6 col-md-offset-3">
			<section class="well">

				<header class="page-header text-center">
					<h1>Password reset request</h1>
				</header>
				
				<div class="alert alert-danger" v-if="errors.root">
                    {{ errors.root }}
                </div>

                <div class="alert alert-danger" v-if="success">
                    <p><strong>Success</strong> a email has been sent with instructions on how to reset you're password.</p>
                </div>

				<form @submit.prevent="submit" class="form-inline text-center">
				
					<div class="form-group" :class="{ 'has-error': errors.email }">
						<label for="email" class="control-label">Email:</label>
						<input type="email" v-model="email" id="email" class="form-control" autofocus="true">
						<span class="help-block" v-if="errors.email">
                            {{ errors.email[0] }}
                        </span>
					</div>
				
					<div class="form-group">
						<button type="submit" class="btn btn-primary">Send</button>
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
				email: '',
				success: false,
				errors: []
			}
		},
		methods: {
			...mapActions({
				reset: 'auth/reset'
			}),
			submit () {
				this.reset({
					payload: { email: this.email },
					context: this
				}).then( () => {
					return this.success = true
				}).catch( errors => {
					return this.errors = errors
				})
			}
		}
	}
</script>
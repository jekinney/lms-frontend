<template>
	<section class="well">

		<header class="page-header text-center">
			<h1>User List</h1>
			<router-link :to="{ name: 'createUser' }" class="btn btn-info">Add a new user</router-link>
		</header>

		<table class="table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Customer</th>
					<th>Roles</th>
					<th>Active</th>
					<th>Options</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users">
					<td>{{ user.name }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.customer_name }}</td>
					<td>{{ user.roles }}</td>
					<td><span class="label" :class="labelStatus(user.status)">{{ user.status }}</span></td>
					<td>
						<router-link :to="{ name: 'showUser', params: { uid: user.uid } }" class="btn btn-xs btn-success">
							<i class="fa fa-eye" aria-hidden="true"></i>
						</router-link>
						<router-link :to="{ name: 'editUser', params: { uid: user.uid } }" class="btn btn-xs btn-info">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</router-link>
						<button type="button" class="btn btn-xs" :class="trashStatus(user.status)" @click="toggleConfirm(user)">
							<i class="fa fa-trash-o" aria-hidden="true"></i>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		
		<div class="modal fade" id="confirmation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  			<div class="modal-dialog" role="document">
			    <div class="modal-content">
			      	<div class="modal-header">
			        	<button type="button" class="close" @click="toggleConfirm(null)" aria-label="Close">
			        		<span aria-hidden="true">&times;</span>
			        	</button>
			        	<h4 class="modal-title" id="myModalLabel">Confirm</h4>
			      	</div>
			      	<div class="modal-body text-center">
			        	<h2>Are you sure you want to <strong>{{ user.statusToBe }}</strong> {{ user.name }}?</h2>
			      	</div>
			      	<div class="modal-footer">
			        	<button type="button" class="btn btn-default" @click="toggleConfirm(null)">Cancel</button>
			        	<button type="button" class="btn btn-danger">Confirm</button>
			      	</div>
			    </div>
  			</div>
		</div>

	</section>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { isEmpty } from 'lodash'

	export default {
		data () {
			return {
				user: []
			}
		},
		created () {
			this.getListOfUsers()
		},
		computed: mapGetters({
			users: 'users/users'
		}),
		methods: {
			...mapActions({
				getListOfUsers: 'users/getListOfUsers'
			}),
			labelStatus (status) {
				if(status == 'Active') {
					return 'label-success'
				} else {
					return 'label-danger'
				}
			},
			trashStatus (status) {
				if(status == 'Active') {
					return 'btn-danger'
				} else {
					return 'btn-success'
				}
			},
			toggleConfirm (user) {
				if(!isEmpty(user)) {
					this.user = {
						name: user.name,
						statusToBe: user.status == 'Active'? 'Deactivate':'Activate'
					}
					return $('#confirmation').modal('show')
				} else {
					this.user = []
					$('#confirmation').modal('hide')
				}
			}
		}
	}
</script>
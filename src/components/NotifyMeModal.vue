<template>    
  <div>
    <b-modal hide-footer id="modal-2" :title="title">
        <div>
          <p>Plese enter your email address, we will contact you as soon as <strong>{{name}}</strong> is back in stock</p>
          <b-form @submit="onSubmit">
            <b-form-group
              label="Email address:"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" class="btn-block">Notify Me</b-button>
          </b-form>
        </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'NotifyMeModal',
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      title: "Notify Me",
      form: {
        email: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }
}
</script>

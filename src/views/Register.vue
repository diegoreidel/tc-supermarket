<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-email"
        label="Email address:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-name" label="Your Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-password" label="Password" label-for="password" 
      description="Your password must be 8-20 characters long, contain letters and numbers, 
      and must not contain spaces, special characters, or emoji.">
        <b-form-input
          id="password"
          type="password"
          v-model="form.password"
          required
          placeholder="Your password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-password-confirm" 
      label="Confirm your password" 
      label-for="password-confirm" 
      >
        <b-form-input
          id="password-confirm"
          type="password"
          v-model="form.passwordConfirm"
          required
          placeholder="Confirm your password"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-terms">
        <b-form-checkbox-group v-model="form.terms" id="terms">
          <b-form-checkbox value="true">I agree to the terms and conditions</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          passwordConfirm: '',
          terms: []
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
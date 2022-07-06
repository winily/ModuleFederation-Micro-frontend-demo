<template>
  <div class="info" style="text-align: left;">
    <el-form label-position="top" ref="form" :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Localion">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <el-form-item label="Business hours">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Select date"
            v-model="form.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" style="text-align: center;" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="Select time" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Style">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Cake" name="Cake"></el-checkbox>
          <el-checkbox label="Flowers" name="Flowers"></el-checkbox>
          <el-checkbox label="Chinese food" name="Chinese_food"></el-checkbox>
          <el-checkbox label="Snack" name="Snack"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: new Date(),
        date2: new Date(),
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
}
</script>

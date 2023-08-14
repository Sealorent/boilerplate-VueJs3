import axios from 'axios'

class Static {
  static url(endpoint) {
    return import.meta.env.VITE_BASE_URL_API + '/' + endpoint // Replace 'api.github.com' with your actual API URL
  }
}

class MainRepositories {
  examplePost(data) {
    var config = {
      method: 'post',
      url: Static.url('login.php'),
      data: data
    }
    return axios(config)
  }

  exampleGet(params) {
    return axios.get(Static.url('laporan_datangpulang.php'), { params: params })
  }
}

export default new MainRepositories()

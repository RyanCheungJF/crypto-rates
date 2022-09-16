import axios from 'axios'

export const getCryptoData = async (link: string) => {
  const res = await axios.get(link)
  if (res.status != 200) {
    console.log('Could not fetch data!')
    return
  }
  const data = res.data
  return data
}

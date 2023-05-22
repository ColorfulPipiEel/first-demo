import httpInstance from "@/utils/https.js"

// 获取banner图
export function getBannerAPI () {
  return httpInstance({
    url: 'home/banner'
  })
}
// 获取新鲜好物
export function getNewAPI() {
  return httpInstance({
    url:'/home/new'
  })
}
// 获取人气推荐
export function getHotAPI() {
  return httpInstance({
    url:'/home/hot'
  })
}
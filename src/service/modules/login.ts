import http from '@/service'

export function getSmsCode(phone: number) {
  return http.get(`/admin/mobile/register-sms/${phone}`)
}

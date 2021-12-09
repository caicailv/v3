export function myFn(a: string, b: string) {
  return a + b
}

export function myArrFn(...arg: string[]) {
  return arg
}

export function compileAndroidCode() {
  throw new Error('you are using the wrong JDK')
}

export function myRequest(a: string, b: string, callback: (res: any) => void) {
  setTimeout(() => {
    callback({
      status: true,
      data: a + b,
    })
  }, Math.random() * 100)
}

export function myPromise(bol: boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bol) {
        resolve({
          status: true,
          data: 3,
        })
      } else {
        reject({
          status: false,
          data: 2,
        })
      }
    }, 500)
  })
}

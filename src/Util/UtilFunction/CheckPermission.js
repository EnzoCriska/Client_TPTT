import {
    PermissionsAndroid
} from 'react-native'

export async function CheckContactPermission(callback){
  try {
    console.log("checkPer")
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'READ_CONTACTS Permission',
          'message': 'READ_CONTACTS needs access to your READ_CONTACTS ' +
                     'so you can take awesome READ_CONTACTS.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the READ_CONTACTS")
        callback("Ok")
      } else {
        console.log("READ_CONTACTS permission denied")
        callback("false")
      }
    } catch (err) {
      console.warn(err)
    }
}
export async function CheckCameraPermission(callback){
  try {
    const granted1 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'CAMERA Permission',
        'message': 'READ_CONTACTS needs access to your CAMERA ' +
                   'so you can take awesome CAMERA.'
      }
    )
    if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the CAMERA")
      callback("Ok")
    } else {
      console.log("CAMERA permission denied")
      callback("false")
    }
  } catch (error) {
    console.warn(error)
  }
}


export async function CheckStoragePermission(callback){
    try{  
        const granted2 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            'title': 'READ_EXTERNAL_STORAGE Permission',
            'message': 'READ_EXTERNAL_STORAGE needs access to your READ_EXTERNAL_STORAGE ' +
                       'so you can take awesome READ_EXTERNAL_STORAGE.'
          }
        )
        if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the READ_EXTERNAL_STORAGE")
          callback("Ok")
        } else {
          console.log("READ_EXTERNAL_STORAGE permission denied")
          callback("false")
        }

        const granted3 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            'title': 'WRITE_EXTERNAL_STORAGE Permission',
            'message': 'WRITE_EXTERNAL_STORAGE needs access to your WRITE_EXTERNAL_STORAGE ' +
                       'so you can take awesome WRITE_EXTERNAL_STORAGE.'
          }
        )
        if (granted3 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the WRITE_EXTERNAL_STORAGE")
          callback("Ok")
        } else {
          console.log("WRITE_EXTERNAL_STORAGE permission denied")
          callback("false")
        }
      } catch (err) {
        console.warn(err)
      }
}
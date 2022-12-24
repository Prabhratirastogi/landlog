import * as firebaseAdmin from "firebase-admin";

const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCyN4AyBsU8VAwz\nXck81KB+dKLqoJ2sKIUOyB5eHWSFBQfnWa9OOmY6R6tNmGXPXNKxAl3qY0aQGoBR\npUzHBX+DBwPqO2Qpf9DTcPch62p5m/FfOwzW2eESOWMRFk0aFoCHLrMfMFpp69OW\n2coWCI0scrE6bMWY6uloHeiUbjQAP5++vqR+QAEpmeHlgT2cut4BW9Ix9hUPEcnU\n0UdFCLrGg8cgPof9p8OYwWTG6/8lakiuYts6VrQa+FQ7CFxBQqvyxmaQejiNHGGC\nDRTPl5Ut6nlDTvunhV0xt8QgQ/B/iNkaChXZXjx06i5BZyfa+f8TZCQacMgJRoIL\n5fvvdZVZAgMBAAECggEABqfS9ktRb1zWLc7pVoe8TKyvbuK7sLO8sF4h4DLpz5vt\n/SJYzSuaKMAHcjjoSHO3fJvRhRDbEEOlGid5tA8NAYgwCb3ZEkGvO05DNHWVvt/n\nhj5uztFJOgSBoiA6lehUOXgxgU8teTow5zfP972vBANugfeQ85KGT/iZ+H0bHQ0z\nNa/EEisecwVNSbp79id3+XI9yZor3xPNprdzdOXKeJeRNydkQ4ZQhmmY+xZok61U\nXQeofsH983NVJozoU+9JfcPvfpATwGHzzu5N3G3B4kFu+bSLGMn/JbB2dTpXtRp1\nkAaqJfY7AdO9U/VvwSCMRUQ91vnpqCKeRXLk24EWGQKBgQDpyFGu5FraLIrIn4RJ\nK9TC2uOm2F+AU8yKQUOY0ZKc3drd3lwW/ZC9n9vNDtrikz1a5/EloOCRPgmQzHI0\n0+6fXlSA/rtoosQ3yRdonUS1qb7C3P+jYhbnWSVczcDX6Tpz/rTGkH2v2UgIjYoU\nk5yjnQ274OL+13toam7XgwIizQKBgQDDJ1O5hG7XYD4VI369QHpbsfqGQrz4fZey\n5Ffz+KOhS1e2S7SVni3svaFNYkHIulmxH7cN40FzMvxnFeHyacKQKCSSn9vApgWD\nAgIxlchayC13awPLZbCSbwXCF5fCuBLPU3pRkpP84uPeto4v7npyIHZnDS2zOWZv\njLztrZF0vQKBgDV0SUENE7z5HE6dMrksXXykYhM/PC7yej1OiO9DVBusGqRKeJIF\nLng9Ohvb/q557jh/+kKZU1/CaJuEM8TihJhKEFZiaGWXefgrcb/I3fIPuv+BWq53\n+jaxyno6zZJQ0L2/CoSwexyfOPpDqsPjsJg0i/ReimisypnoZCnA2dctAoGAJUdS\n6AJTRhMdaN5R7IbvmKqD57fB71nWa5bQ8krRvxLsW2dUxKvlq+6BbI3TcSufzIT5\na864hu/7ZRm6ApuPTghNDDE7Qi60qNTuZFhvYGASx1gK7oSrWR2aJPxqwgh1l2Mj\n34c3e7w/uSB4QtG0VC69T2wmCbFyTua8hE5+laUCgYAwTV3LfMoK5mmkCu4zRp5r\n7+/5ALBnA/JAvUGZ4wWERtGmcWFNNViT+aLfjti3nohkJtvIBP86Lyok0zmORYSl\nuhUy4OUO8extkr+jFhD9FgrhGrm5MbETsk8y+oxmUof2tSgBZuPmnqfE+njR+3KN\nfuwZCInozwmh3y5oOw1q+w==\n-----END PRIVATE KEY-----\n";
const clientEmail = "firebase-adminsdk-t5qe4@landlog-342017.iam.gserviceaccount.com";
const projectId = "landlog-342017";

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}


if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  });
}

export { firebaseAdmin };
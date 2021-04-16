import { fetchPost, fetchCommentsOfPost, fetchReactionsOfComment, wait } from './api'

async function onLoad(callback) {
   try {

      const fetchedPost = await fetchPost()
      const fetchedCommentsOfPost = await fetchCommentsOfPost("55573462-be31-55df-901f-36603d3894e4")
      const fetchedReactionsOfComment = await fetchReactionsOfComment("55573462-be31-55df-901f-36603d3894e4")

      callback(fetchedPost)
      await wait(2000);
      callback(fetchedCommentsOfPost)
      await wait(2000);
      callback(fetchedReactionsOfComment)

   } catch (err) {

      throw new Error(err)

   }

}

onLoad((result) => console.log(result))

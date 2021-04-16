import data from '../postData.json'


export function fetchPost() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (data) {
                const newData = data.map((post) => {

                    const postClone = { ...post }

                    if (postClone.comments) {

                        delete postClone.comments

                    }

                    return postClone

                })

                resolve(newData)

            } else {

                reject("can`t fetch post")

            }

        }, 1000)
    })
}


export function fetchCommentsOfPost(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const foundData = data.find((post) => id === post.id)

            if (foundData && foundData.comments) {

                const commentsArray = foundData.comments.map((post) => {

                    const postClone = { ...post }

                    if (postClone.reactions) {

                        delete postClone.reactions

                    }

                    return postClone

                })

                resolve(commentsArray)

            } else {

                reject('post does not have comments')

            }

        }, 2000)
    })

}


export function fetchReactionsOfComment(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const foundData = data.find((post) => id === post.id)

            if (foundData && foundData.comments) {

                const reactionsArray = foundData.comments.reduce((agr, calc) => {

                    const calcClone = { ...calc }

                    return calcClone.reactions ? [...agr, ...calcClone.reactions] : agr

                }, [])

                resolve(reactionsArray)

            } else {

                reject('post does not have reactions')

            }

        }, 3000)
    })
}

export function wait(milliseconds) {

    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
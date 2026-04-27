---
description: The image field is used to store an image.
title: Image field
image: http://localhost:3000/og/docs/fields/image
---

# Image field

The `image` field is used to store an image. In the Admin UI it renders an image picker component:

AvatarThe avatar for this user

Choose file

Images will be stored on your local file system or GitHub repository.

For a cloud-based alternative, see the [Cloud image field](/docs/fields/cloud-image) designed for [Keystatic Cloud](/docs/cloud).

---

[Image storage options](#image-storage-options)

The default behaviour of the image field is to create a directory matching the entry `slug`, and place an image named after the `image` field inside.

Take the following configuration:

```
authors: collection({
  schema: {
    // ...
    avatar: fields.image({ label: 'Avatar' })
  }
})
```

Creating a `john-doe` author and uploading a `jpg` image for the `avatar` will generate the following:

```
authors
├── john-doe
    └── avatar.jpg
└── john-doe.yaml
```

The value stored in the `john-doe.yaml` file for the `avatar` will be:

```
avatar: avatar.jpg
```

This is workable, but quite often you'll want to configure:

* _where_ the image is stored
* _how_ the reference path to the image is constructed
[Directory](#directory)

You can specify a `directory` from your project tree.

Say you want to output images in the `public` directory:

```
avatar: fields.image({
  label: 'Avatar',
+  directory: 'public/images/avatars',
})
```

Uploading a `jpg` image on the `john-doe` entry would now output the following:

```
authors
└── john-doe.yaml
public
└── images
    └── avatars
        └── john-doe
            └── avatar.jpg
```

☝️

The value stored in the `john-doe` file will still be:

`avatar: avatar.jpg`

...so chances are you'll also want to configure the `publicPath` option.

[Public path](#public-path)

The `publicPath` option lets you control how the path to the image (as you'd use in the front end) is constructed:

```
avatar: fields.image({
  label: 'Avatar',
  directory: 'public/images/avatars',
+  publicPath: '/images/avatars/'
})
```

The entry slug and image field name will be composed with this `publicPath`.

Here's how the `avatar` field would now be stored with our `john-doe` example:

```
avatar: /images/avatars/john-doe/avatar.jpg
```

---

[Screencast walk-through](#screencast-walk-through)

This segment of the [Keystatic Mini-Course on YouTube](https://www.youtube.com/playlist?list=PLHrxuCR-0CcSmkyLcmdV7Ruql8DTm644k) may help understand how the image field works:

---

[Type signature](#type-signature)

Find the latest version of this field's type signature at: <https://docsmill.dev/npm/@keystatic/core@latest#/.fields.image>

## On this page

* [Overview](#heading-1-overview)
* [Image storage options](#image-storage-options)
* [Directory](#directory)
* [Public path](#public-path)
* [Screencast walk-through](#screencast-walk-through)
* [Type signature](#type-signature)

---

[Edit this page](https://github.com/Thinkmill/keystatic/edit/main/docs/src/content/pages/fields/image.mdoc)
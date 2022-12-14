## API routes

The following api routes have already been implemented for you (**Make sure to document all the routes that you have added.**):


# USERS

#### `POST /api/users/session` - Sign in user

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with user's details (without password)

**Throws**

- `403` if the user is already logged in
- `400` if username or password is not in correct format or missing in the req
- `401` if the user login credentials are invalid

#### `DELETE /api/users/session` - Sign out user

**Returns**

- A success message

**Throws**

- `403` if user is not logged in

#### `POST /api/users` - Create a new user account

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with the created user's details (without password)

**Throws**

- `403` if there is a user already logged in
- `400` if username or password is in the wrong format
- `409` if username is already in use

#### `PUT /api/users` - Update a user's profile

**Body** _(no need to add fields that are not being changed)_

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with the update user details (without password)

**Throws**

- `403` if the user is not logged in
- `400` if username or password is in the wrong format
- `409` if the username is already in use

#### `DELETE /api/users` - Delete user

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in








# ALIAS

---

### 'POST /api/users/alias/session' - Sign in to alias

**Returns**

- Success message

**Throws**

- '403' if alias does not belong to session user

### 'GET /api/users/alias'

**Returns**

- A message containing: signed in alias (if it exists) and all aliasnames of the session's user

**Throws**

- '403' if user is not signed in


### 'DELETE /api/users/alias/session' - log alias out

**Returns**

- A success message

**Throws**

- '403' if alias is not logged in


### 'POST /api/users/alias' - create alias account

**Returns**

- The created Alias

**Throws**

- '400' if aliasname or userId not in correct format
- '403' if there is an alias already logged in
- '409' if aliasname already taken


### 'PUT /api/users/alias' - Update alias's aliasname

**Returns**

- Success Message

**Throws**

- '400' if aliasname is not in valid format
- '403' if you are not logged in to an alias
- '409' if aliasname already taken

### 'DELETE /api/users/alias' - Delete alias

**Returns**

- Success message

**Throws**

- '403' if user is not logged in







# FREETS

#### `GET /`

This renders the `index.html` file that will be used to interact with the backend

#### `GET /api/freets` - Get all the freets

**Returns**

- An array of all freets sorted in descending order by date modified

#### `GET /api/freets?author=ALIASNAME` - Get freets by author

**Returns**

- An array of freets created by alias with aliasname `author`

**Throws**

- `400` if `author` is not given
- `404` if `author` is not a recognized aliasname of any alias

#### `POST /api/freets` - Create a new freet

**Body**

- `content` _{string}_ - The content of the freet

**Returns**

- A success message
- An object with the created freet

**Throws**

- `403` if the alias is not logged in
- `400` If the freet content is empty or a stream of empty spaces
- `413` If the freet content is more than 140 characters long

#### `DELETE /api/freets/:freetId?` - Delete an existing freet

**Returns**

- A success message

**Throws**

- `403` if the alias is not logged in
- `403` if the alias is not the author of the freet
- `404` if the freetId is invalid

#### `PUT /api/freets/:freetId?` - Update an existing freet

**Body**

- `content` _{string}_ - The new content of the freet

**Returns**

- A success message
- An object with the updated freet

**Throws**

- `403` if the alias is not logged in
- `404` if the freetId is invalid
- `403` if the alias is not the author of the freet
- `400` if the new freet content is empty or a stream of empty spaces
- `413` if the new freet content is more than 140 characters long





# Proliferate
---

### 'POST /api/proliferate/:contentId' - Proliferate the content (most likely freet)

**Returns**

- A success message

**Throws**

- Alias not signed in
- This alias has already proliferated this freet
- Content does not exist

### 'GET /api/proliferate/:contentId' - Get number of proliferates on content

**Returns**

- Number of proliferates on content

**Throws**

- Content does not exist

### 'DELETE /api/proliferate/:contentId' - Un-proliferate the content

**Returns**

- A success message

**Throws**

- Alias not signed in
- Alias has not proliferated this freet
- Content does not exist






# Reactions
---

### 'POST /api/reactions/:contentId' - React to the freet

**Returns**

- A success message

**Throws**

- Alias not signed in
- Freet does not exist
- EmojiId does not exist


### 'PUT /api/reactions/:contentId' - Change reaction to content

**Returns**

- A success message

**Throws**

- Alias is not signed in
- Content does not exist
- EmojiId does not exist


### 'DELETE /api/reactions' - un-react to the content

**Returns**

- A success message

**Throws**

- Alias not signed in
- Alias has not reacted this freet
- Freet does not exist
- Content does not exist






# Rejection
---

### 'POST /api/rejections/:contentId?' - Reject this content

**Returns**

- A success message

**Throws**

- Alias not signed in
- Freet does not exist
- Alias has already rejected this freet
- Content does not exist

### 'GET /api/rejections' - Get all rejections alias has done

**Returns**

- List of all rejection objects

**Throws**

- Alias not signed in

### 'DELETE /api/rejections/:contentId?' - un-reject this freet

**Returns**

- A success message

**Throws**

- Alias not signed in
- Alias has not rejected this freet
- Freet does not exist
- Content does not exist









# Follow
---

### 'POST /api/follows' - Follow alias

**Returns**

- A success message

**Throws**

- Alias not signed in
- Alias is trying to follow itself
- You already follow this alias

### 'GET /api/follows/:aliasId' - Get all who aliasId follows

**Returns**

- List of all Follow objects
- Number of follow objects

**Throws**

- Alias with aliasId does not exist

### 'GET /api/follows/followers/:aliasId' - Get all who follow aliasId

**Returns**

- List of all aliases followed
- Number of aliases followed

**Throws**

- Alias with aliasId does not exist

### 'DELETE /api/follows' - Un-follow alias

**Returns**

- A success message

**Throws**

- Alias not signed in
- Alias does not follow other alias





# Subscription Box
---

### 'GET /api/sub_box' -  get content according to whom you follow

**Returns**

- List of content in chronological order based on whom you follow

**Throws**

- Alias not signed in





# Feed
---

### 'GET /api/feed' - get content curated based on how the alias reacts to content

**Returns**

- List of content ordered by what the algorithm thinks the alias would like

**Throws**

- Alias not signed in





# Trending
---

### 'GET /api/trending' - get content based agnostic to your preferences

**Returns**

- List of content based on what's popular right now

**Throws**

- Can't think of anything right now





# Profile
---

### 'GET /api/profiles/:aliasId' - Get all freets by alias

**Returns**

- A success message
- List of freets by alias

**Returns**

- Other alias does not exist





# Musical Profiles
---

### 'POST /api/profiles/:aliasId/music' - add playlist to your profile
does this need :aliasId?

**Returns**

- A success message

**Throws**

- Alias is not signed in
- Invalid playlist (URL?)


### 'GET /api/profiles/:aliasId/music' - add playlist to active playlist

**Returns**

- A playlist object

**Throws**

- Alias is not signed in
- Invalid playlist object
- Other alias does not exist





# Usage Alerts
---

### 'POST /api/profiles/usage_alerts' - create a new alert

**Returns**

- A success message
- An alert object?

**Throws**

- Alias is not signed in
- Invalid alert format
- Identical alert already exists


### 'GET /api/usage_alerts' - get all alerts for your alias

**Returns**

- A success message
- All alert objects?

**Throws**

- Alias is not signed in


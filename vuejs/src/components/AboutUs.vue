<template>
  <v-container>
    <div :class="[`text-h2`]" class="transition-swing">About Us</div>
    <br />

    We are not going to abandon libhub. We have designed an ambitious project
    and since the beginning it was thought to be used by some members of the
    team who had the problem of huge home libraries. We already developed this
    main part and we could already use it for ourselves. We deem that some of
    the functionalities that we did not manage to develop, are still important
    to have a beautiful project that will go on our personal portfolio sites. We
    choose vuetify as a frontend framework not only because it had a huge
    quantity of components and consisted in a perfect material implementation,
    but also because it made it very easy to build a responsive web application.
    With not too much effort our site mobile support can become perfect and we
    can extend it even for tablet devices. Nonetheless, we think that a mobile
    application could be better and could make our project be reached by lots of
    users. We have again divided the team in two subtems, according to our
    commitments. One subteam will develop both a perfect responsive webapp,
    making it also a pwa, while the other one will develop an hybrid mobile
    application by using React Native. We think that having learnt vuejs will
    make it very easy to learn React. We also are thinking about developing a
    desktop application, which will be exactly the same of the web app by using
    Electron. Given a site, electron creates a desktop application that works on
    Windows, OSX and Linux, by creating a chromium instance that runs the site
    and supports also the node js libraries that would not work in a normal
    browser. By doing this we want to deliver to the user the possibility to
    have an offline support of the service, that uses a local sqlite3 database
    when the application is offline and synchronizes with the cloud mongodb when
    it comes back online.
    <br /><br />
    If you want to have an awesome experince try to use the <strong> superUser Account </strong>
    <br />
    Username: <strong> the_one </strong>
    <br />
    Pass: <strong> nsfw</strong>

  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
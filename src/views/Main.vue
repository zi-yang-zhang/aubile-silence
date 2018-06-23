<template>
	<div class="main">
		<nav class="navigator">
			<div>Audible Silence</div>
			<router-link :to="{ name: 'home'}">Home</router-link>
			<router-link :to="{ name: 'gallery'}">Gallery</router-link>
			<router-link :to="{ name: 'about'}">About</router-link>

		</nav>
		<div class="content">
			<router-view/>
		</div>
		<div class="footer">
			<p>By Robert Zhang</p>
		</div>
	</div>

</template>

<script>
export default {
  name: "main"
};
</script>
<style scoped lang="less">
.main {
  background: rgb(41, 41, 41);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.navigator {
  position: relative;
  width: 100%;
  height: auto;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  div {
    padding: 15px;
    font-size: 24px;
    color: rgb(244, 244, 244);
  }
  a {
    padding: 40px;
    font-size: 20px;
    color: rgb(196, 196, 196);
    text-decoration: none;
  }
}
.content {
  width: 100%;
  height: auto;
  position: absolute;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  p {
    padding: 15px;
  }
}
</style>

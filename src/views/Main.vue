<template>
	<div class="main">
		<div class="header">
			<div class="title">Audible Silence</div>
			<nav class="navigator">
				<router-link :to="{ name: 'home'}">Home</router-link>
				<router-link :to="{ name: 'gallery'}">Gallery</router-link>
				<router-link :to="{ name: 'about'}">About</router-link>
			</nav>
		</div>

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

.header {
  position: relative;
  width: 100%;

  .title {
    padding: 10px;
    font-size: 20px;
    color: rgb(244, 244, 244);
  }
  .navigator {
    display: inline-flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    a {
      padding: 10px;
      font-size: 16px;
      color: rgb(196, 196, 196);
      text-decoration: none;
    }
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

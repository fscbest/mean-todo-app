var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
	//return gulp.src("src/app.js")
	return gulp.src("server.js")
			.pipe(babel())
		.pipe(gulp.dest("dist"));
});
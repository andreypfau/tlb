pluginManagement {
    repositories {
        mavenCentral()
        gradlePluginPortal()
        google()
        maven("https://maven.pkg.jetbrains.space/public/p/amper/amper")
    }
}

plugins {
    id("org.gradle.toolchains.foojay-resolver-convention") version "0.5.0"
    id("org.jetbrains.amper.settings.plugin").version("0.1.4")
}

rootProject.name = "tlb"

plugins.apply("org.jetbrains.amper.settings.plugin")

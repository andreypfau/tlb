plugins {
    kotlin("multiplatform") version "1.9.21"
}

repositories {
    mavenCentral()
}

kotlin {
    jvm()
    js {
        moduleName = "tlb"
        browser {

        }
        binaries.library()
        generateTypeScriptDefinitions()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("me.alllex.parsus:parsus:0.6.1")
                implementation("io.github.andreypfau:kotlinx-crypto-crc32:0.0.1")
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.8.0")
            }
        }
    }
}

$(document).ready(function () {
    var projects = [
        {
            "title": "The Holy Qur'an",
            "image": "src/images/projects/quran.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.hmz.al_quran"
                },
                {
                    "title": "Web",
                    "link": "https://mhmzdev.github.io/quran/"
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/the-holy-quran-app"
                }
            ]
        },
        {
            "title": "Devfolio",
            "image": "src/images/projects/devfolio.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.hmz.folio"
                },
                {
                    "title": "Web",
                    "link": "http://mhmzdev.github.io/devfolio"
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/devfolio"
                }
            ]
        },
        {
            "title": "Awesome Snackbar Content",
            "image": "src/images/projects/snackbar.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/awesome_snackbar_content"
                },
                {
                    "title": "Package",
                    "link": "https://pub.dev/packages/awesome_snackbar_content"
                }
            ]
        },
        {
            "title": "COVID-19 Tracker",
            "image": "src/images/projects/covid.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/covid19-tracker-app"
                }
            ]
        },
        {
            "title": "Storius",
            "image": "src/images/projects/storius.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": "https://apps.apple.com/hk/app/storius-app/id1581928786?l=en"
                },
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.storius.storiusapp"
                },
                {
                    "title": "Web",
                    "link": "https://storiusapp.com/"
                }
            ]
        },
        {
            "title": "Sastaticket.pk",
            "image": "src/images/projects/sastaticket.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": "https://apps.apple.com/in/app/sastaticket-flight-hotels/id1564441908"
                },
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.pk.sastaticket&hl=en&gl=US"
                },
                {
                    "title": "Web",
                    "link": "https://www.sastaticket.pk/"
                }
            ]
        }
    ];


    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('div');
            label.className = "p-label";
            var lableIcon = document.createElement("i");

            if (title == "App") {
                lableIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                lableIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                lableIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                lableIcon.className = "p-label-icon fa fa-github";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.onclick = () => {
                window.open(link, '_blank');
            };

            label.appendChild(lableIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }

});
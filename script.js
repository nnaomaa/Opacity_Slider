function changeOpacity() {
            var opacityValue = document.getElementById("opacitySlider").value;
            var image = document.getElementById("sampleImage");
            image.style.opacity = opacityValue;
        }
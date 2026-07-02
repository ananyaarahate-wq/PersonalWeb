(function () {
  var intro = document.getElementById("launchIntro");
  var skipIntro = document.getElementById("skipIntro");
  var countdownValue = document.getElementById("countdownValue");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var launchKey = "ananyaaPortfolioLaunchSeen";

  function finishIntro() {
    if (!intro) {
      return;
    }

    intro.classList.add("is-hidden");
    intro.setAttribute("aria-hidden", "true");
    document.body.classList.remove("launch-lock");
    window.sessionStorage.setItem(launchKey, "true");

    window.setTimeout(function () {
      if (intro && intro.parentNode) {
        intro.parentNode.removeChild(intro);
      }
    }, 700);
  }

  if (intro) {
    var introSeen = window.sessionStorage.getItem(launchKey) === "true";

    if (introSeen || reduceMotion.matches) {
      document.body.classList.remove("launch-lock");
      intro.classList.add("is-hidden");
      intro.setAttribute("aria-hidden", "true");
      window.sessionStorage.setItem(launchKey, "true");
      window.setTimeout(function () {
        if (intro && intro.parentNode) {
          intro.parentNode.removeChild(intro);
        }
      }, 80);
    } else {
      document.body.classList.add("launch-lock");
      var steps = ["T-5", "T-4", "T-3", "T-2", "T-1", "LIFTOFF"];
      var index = 0;
      var timer = window.setInterval(function () {
        index += 1;

        if (countdownValue && steps[index]) {
          countdownValue.textContent = steps[index];
        }

        if (index >= steps.length - 1) {
          window.clearInterval(timer);
          intro.classList.add("is-launching");
          window.setTimeout(finishIntro, 1100);
        }
      }, 520);

      if (skipIntro) {
        skipIntro.addEventListener("click", function () {
          window.clearInterval(timer);
          finishIntro();
        });
      }
    }
  }

  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("siteNav");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var missionClock = document.getElementById("missionClock");
  var orbitProgressBar = document.getElementById("orbitProgressBar");
  var orbitProgressText = document.getElementById("orbitProgressText");
  var signalReadout = document.getElementById("signalReadout");

  function padTime(value) {
    return String(value).padStart(2, "0");
  }

  function updateMissionClock() {
    if (!missionClock) {
      return;
    }

    var now = new Date();
    missionClock.textContent = padTime(now.getUTCHours()) + ":" + padTime(now.getUTCMinutes()) + ":" + padTime(now.getUTCSeconds()) + " UTC";
  }

  function updateOrbitProgress() {
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    var progress = maxScroll > 0 ? Math.round((window.scrollY / maxScroll) * 100) : 0;
    var clamped = Math.max(0, Math.min(100, progress));

    if (orbitProgressBar) {
      orbitProgressBar.style.width = clamped + "%";
    }

    if (orbitProgressText) {
      orbitProgressText.textContent = clamped + "%";
    }

    if (signalReadout) {
      signalReadout.textContent = clamped > 82 ? "Docked" : clamped > 48 ? "Locked" : "Strong";
    }
  }

  updateMissionClock();
  updateOrbitProgress();
  window.setInterval(updateMissionClock, 1000);
  window.addEventListener("scroll", updateOrbitProgress, { passive: true });
  window.addEventListener("resize", updateOrbitProgress);

  var readinessInputs = Array.prototype.slice.call(document.querySelectorAll(".launch-checklist input"));
  var readinessText = document.getElementById("readinessText");
  var readinessFill = document.getElementById("readinessFill");

  function updateReadiness() {
    if (!readinessInputs.length) {
      return;
    }

    var complete = readinessInputs.filter(function (input) {
      return input.checked;
    }).length;
    var readiness = Math.round((complete / readinessInputs.length) * 100);

    if (readinessText) {
      readinessText.textContent = readiness + "%";
    }

    if (readinessFill) {
      readinessFill.style.width = readiness + "%";
    }
  }

  readinessInputs.forEach(function (input) {
    input.addEventListener("change", updateReadiness);
  });
  updateReadiness();

  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter-button]"));
  var missionCards = Array.prototype.slice.call(document.querySelectorAll("[data-mission-tags]"));

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter-button");

      filterButtons.forEach(function (item) {
        var active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      missionCards.forEach(function (card) {
        var tags = card.getAttribute("data-mission-tags") || "";
        var visible = filter === "all" || tags.indexOf(filter) > -1;
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });

  var consoleOutput = document.getElementById("consoleOutput");
  var consoleButtons = Array.prototype.slice.call(document.querySelectorAll("[data-console-command]"));
  var consoleMessages = {
    missions: "Mission scan complete: 4 active files detected across assistive technology, atmospheric science, sustainable combustion research, and structural mathematics.",
    badges: "Badge decoder online: science fair, maths, chemistry, physics, biology, leadership, environment, and engineering orbits are all reporting achievements.",
    trajectory: "Trajectory lab ready: adjust thrust, launch angle, and fuel reserve to plot a custom orbit profile."
  };

  consoleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var command = button.getAttribute("data-console-command");

      if (consoleOutput && consoleMessages[command]) {
        consoleOutput.textContent = consoleMessages[command];
      }
    });
  });

  var thrustControl = document.getElementById("thrustControl");
  var angleControl = document.getElementById("angleControl");
  var fuelControl = document.getElementById("fuelControl");
  var thrustValue = document.getElementById("thrustValue");
  var angleValue = document.getElementById("angleValue");
  var fuelValue = document.getElementById("fuelValue");
  var plotRocket = document.getElementById("plotRocket");
  var trajectoryDisplay = document.querySelector(".trajectory-display");
  var trajectoryStatus = document.getElementById("trajectoryStatus");
  var orbitClass = document.getElementById("orbitClass");
  var apogeeReadout = document.getElementById("apogeeReadout");
  var velocityReadout = document.getElementById("velocityReadout");
  var efficiencyReadout = document.getElementById("efficiencyReadout");
  var runTrajectory = document.getElementById("runTrajectory");

  function updateTrajectory(runAnimation) {
    if (!thrustControl || !angleControl || !fuelControl) {
      return;
    }

    var thrust = Number(thrustControl.value);
    var angle = Number(angleControl.value);
    var fuel = Number(fuelControl.value);
    var balance = Math.max(0, 100 - Math.abs(angle - 45) * 1.7);
    var efficiency = Math.round((balance * 0.46) + (fuel * 0.28) + (thrust * 0.26));
    var apogee = Math.round(70 + thrust * 0.9 + fuel * 0.45 + angle * 0.58);
    var velocity = (5.4 + thrust * 0.035 + fuel * 0.012 + balance * 0.01).toFixed(1);
    var rocketX = Math.min(84, Math.max(24, 18 + thrust * 0.54 + fuel * 0.12));
    var rocketY = Math.min(70, Math.max(14, 75 - angle * 0.72 - thrust * 0.08));
    var rotation = -18 - (angle - 45) * 0.75;

    if (thrustValue) {
      thrustValue.textContent = thrust + "%";
    }

    if (angleValue) {
      angleValue.textContent = angle + " deg";
    }

    if (fuelValue) {
      fuelValue.textContent = fuel + "%";
    }

    if (plotRocket) {
      plotRocket.style.setProperty("--rocket-x", rocketX + "%");
      plotRocket.style.setProperty("--rocket-y", rocketY + "%");
      plotRocket.style.setProperty("--rocket-rotation", rotation + "deg");
    }

    if (trajectoryDisplay) {
      trajectoryDisplay.style.setProperty("--path-rotation", (angle * -0.18) + "deg");
      if (runAnimation) {
        trajectoryDisplay.classList.remove("is-running");
        window.requestAnimationFrame(function () {
          trajectoryDisplay.classList.add("is-running");
          window.setTimeout(function () {
            trajectoryDisplay.classList.remove("is-running");
          }, 720);
        });
      }
    }

    if (apogeeReadout) {
      apogeeReadout.textContent = apogee + " km";
    }

    if (velocityReadout) {
      velocityReadout.textContent = velocity + " km/s";
    }

    if (efficiencyReadout) {
      efficiencyReadout.textContent = efficiency + "%";
    }

    if (orbitClass) {
      orbitClass.textContent = apogee > 195 ? "High Orbit" : apogee > 145 ? "Mid Orbit" : "Low Orbit";
    }

    if (trajectoryStatus) {
      trajectoryStatus.textContent = efficiency > 82 ? "Stable" : efficiency > 68 ? "Adjusting" : "Risky";
    }
  }

  [thrustControl, angleControl, fuelControl].forEach(function (control) {
    if (control) {
      control.addEventListener("input", function () {
        updateTrajectory(false);
      });
    }
  });

  if (runTrajectory) {
    runTrajectory.addEventListener("click", function () {
      updateTrajectory(true);
    });
  }

  updateTrajectory(false);

  var constellationTrack = document.getElementById("constellationTrack");
  var constellationCards = constellationTrack ? Array.prototype.slice.call(constellationTrack.querySelectorAll(".constellation-card")) : [];
  var constellationPrev = document.getElementById("constellationPrev");
  var constellationNext = document.getElementById("constellationNext");
  var constellationDots = document.getElementById("constellationDots");
  var constellationIndex = 0;
  var constellationStartX = 0;

  function updateConstellationCarousel(index) {
    if (!constellationTrack || !constellationCards.length) {
      return;
    }

    constellationIndex = (index + constellationCards.length) % constellationCards.length;
    constellationTrack.style.setProperty("--constellation-offset", (-constellationIndex * 100) + "%");

    constellationCards.forEach(function (card, cardIndex) {
      card.setAttribute("aria-hidden", String(cardIndex !== constellationIndex));
    });

    if (constellationDots) {
      Array.prototype.slice.call(constellationDots.querySelectorAll("button")).forEach(function (dot, dotIndex) {
        var active = dotIndex === constellationIndex;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    }
  }

  if (constellationTrack && constellationCards.length) {
    if (constellationDots) {
      constellationCards.forEach(function (card, index) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "constellation-dot";
        dot.setAttribute("aria-label", "Show " + (card.querySelector("h3") ? card.querySelector("h3").textContent : "constellation " + (index + 1)));
        dot.addEventListener("click", function () {
          updateConstellationCarousel(index);
        });
        constellationDots.appendChild(dot);
      });
    }

    if (constellationPrev) {
      constellationPrev.addEventListener("click", function () {
        updateConstellationCarousel(constellationIndex - 1);
      });
    }

    if (constellationNext) {
      constellationNext.addEventListener("click", function () {
        updateConstellationCarousel(constellationIndex + 1);
      });
    }

    constellationTrack.addEventListener("pointerdown", function (event) {
      constellationStartX = event.clientX;
    });

    constellationTrack.addEventListener("pointerup", function (event) {
      var delta = event.clientX - constellationStartX;

      if (Math.abs(delta) > 42) {
        updateConstellationCarousel(constellationIndex + (delta < 0 ? 1 : -1));
      }
    });

    updateConstellationCarousel(0);
  }

  var sectionLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));
  var sections = sectionLinks
    .map(function (link) {
      var target = document.querySelector(link.getAttribute("href"));
      return target ? { link: link, target: target } : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sectionLinks.forEach(function (link) {
            link.classList.remove("is-active");
          });

          var active = sectionLinks.find(function (link) {
            return link.getAttribute("href") === "#" + entry.target.id;
          });

          if (active) {
            active.classList.add("is-active");
          }
        }
      });
    }, {
      rootMargin: "-38% 0px -52% 0px",
      threshold: 0
    });

    sections.forEach(function (item) {
      activeObserver.observe(item.target);
    });
  }

  var contactForm = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();
      var subject = encodeURIComponent("Portfolio transmission from " + name);
      var body = encodeURIComponent(
        "Name / Callsign: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Transmission Message:\n" + message
      );

      if (formStatus) {
        formStatus.textContent = "Transmission received. Mission Control will respond soon.";
      }

      window.location.href = "mailto:ananyaa.rahate@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  var cursor = document.getElementById("rocketCursor");
  var trailLayer = document.getElementById("trailLayer");
  var finePointer = window.matchMedia("(pointer: fine) and (min-width: 760px)");

  if (cursor && trailLayer && finePointer.matches) {
    document.documentElement.classList.add("has-rocket-cursor");

    var targetX = window.innerWidth / 2;
    var targetY = window.innerHeight / 2;
    var currentX = targetX;
    var currentY = targetY;
    var lastParticle = 0;
    var visible = false;
    var particles = [];

    function renderCursor() {
      currentX += (targetX - currentX) * 0.28;
      currentY += (targetY - currentY) * 0.28;
      cursor.style.left = currentX + "px";
      cursor.style.top = currentY + "px";
      window.requestAnimationFrame(renderCursor);
    }

    function addParticle(x, y) {
      if (reduceMotion.matches) {
        return;
      }

      var now = performance.now();
      if (now - lastParticle < 28) {
        return;
      }
      lastParticle = now;

      var particle = document.createElement("span");
      var size = 7 + Math.random() * 12;
      var driftX = -12 + Math.random() * 24;
      var driftY = 18 + Math.random() * 28;

      particle.className = "exhaust-particle";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.setProperty("--drift-x", driftX + "px");
      particle.style.setProperty("--drift-y", driftY + "px");

      trailLayer.appendChild(particle);
      particles.push(particle);

      if (particles.length > 34) {
        var oldest = particles.shift();
        if (oldest && oldest.parentNode) {
          oldest.parentNode.removeChild(oldest);
        }
      }

      window.setTimeout(function () {
        var index = particles.indexOf(particle);
        if (index > -1) {
          particles.splice(index, 1);
        }
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 620);
    }

    window.addEventListener("mousemove", function (event) {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        visible = true;
        currentX = targetX;
        currentY = targetY;
        cursor.classList.add("is-visible");
      }

      addParticle(event.clientX - 12, event.clientY + 18);
    }, { passive: true });

    document.addEventListener("mouseleave", function () {
      cursor.classList.remove("is-visible");
      visible = false;
    });

    document.addEventListener("mouseenter", function () {
      cursor.classList.add("is-visible");
      visible = true;
    });

    renderCursor();
  }
})();

(function () {
  var email = "mjkhonline@live.com";
  var rawHost = window.location.hostname || "";
  var host = rawHost.replace(/^www\./i, "");
  var displayDomain = host || "This domain";
  var subjectDomain = host || "your domain";
  var currentUrl =
    window.location.origin && window.location.origin !== "null"
      ? window.location.origin
      : window.location.href;
  var description =
    displayDomain +
    " is available for purchase. Contact the owner by email to make an offer for this premium domain name.";
  var keywords = [
    displayDomain,
    displayDomain + " for sale",
    "domain for sale",
    "buy domain",
    "premium domain",
    "domain name for sale",
    "purchase domain",
    "website domain for sale",
    "دامنه فروشی",
    "خرید دامنه",
    "فروش دامنه",
    "خرید " + displayDomain
  ].join(", ");
  var subject = encodeURIComponent("Inquiry about " + subjectDomain);
  var body = encodeURIComponent(
    "Hello,\n\nI am interested in purchasing " +
      subjectDomain +
      ". Please let me know the asking price and next steps.\n\nThank you."
  );
  var mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;

  function captureEvent(eventName, properties) {
    if (!window.posthog || typeof window.posthog.capture !== "function") {
      return;
    }

    window.posthog.capture(
      eventName,
      Object.assign(
        {
          domain: displayDomain,
          host: host,
          page_url: currentUrl
        },
        properties || {}
      )
    );
  }

  document.title = displayDomain + " is for sale";
  document.querySelector('meta[property="og:title"]').setAttribute("content", document.title);
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", document.title);
  document.getElementById("meta-description").setAttribute("content", description);
  document.getElementById("og-description").setAttribute("content", description);
  document.getElementById("twitter-description").setAttribute("content", description);
  document.getElementById("meta-keywords").setAttribute("content", keywords);
  document.getElementById("canonical-link").setAttribute("href", currentUrl);
  document.getElementById("og-url").setAttribute("content", currentUrl);
  document.getElementById("domain-name").textContent = displayDomain;
  document.getElementById("domain-detail").textContent = displayDomain;
  document.getElementById("footer-domain").textContent = displayDomain + " is available";

  var schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: displayDomain + " for sale",
    url: currentUrl,
    description: description,
    inLanguage: ["en", "fa"],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Product",
        name: displayDomain,
        description: "Premium domain name available for purchase"
      },
      seller: {
        "@type": "Person",
        email: email
      }
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: email,
      contactType: "sales"
    }
  };

  document.getElementById("sale-schema").textContent = JSON.stringify(schema);
  document.querySelectorAll(".email-link").forEach(function (link, index) {
    link.setAttribute("href", mailto);
    link.addEventListener("click", function () {
      captureEvent("email_link_clicked", {
        link_index: index,
        link_text: link.textContent.trim(),
        mailto_subject: "Inquiry about " + subjectDomain
      });
    });
  });

  var copyButton = document.getElementById("copy-email");
  var copyNote = document.getElementById("copy-note");

  copyButton.addEventListener("click", function () {
    captureEvent("copy_email_clicked", {
      button_text: copyButton.textContent.trim()
    });

    if (!navigator.clipboard) {
      copyNote.textContent = email;
      captureEvent("copy_email_fallback_shown");
      return;
    }

    navigator.clipboard
      .writeText(email)
      .then(function () {
        copyNote.textContent = "Email copied.";
        captureEvent("copy_email_succeeded");
      })
      .catch(function () {
        copyNote.textContent = email;
        captureEvent("copy_email_failed");
      });
  });
})();

function Pod (opts) {
  if(!opts) opts = {};
  this.apiVersion = 'v1';
  this.kind = 'Pod';
  this.spec = opts.spec || '';
  this.metadata = opts.metadata || '';
}

function MetaData(){
  this.name = 'tls-server';
  this.labels = {
    "app" : "snidemo",
    "name" : "tls-server"
  };
 }

function Spec(){
  this.containers = [{
    'name' : 'tls-server',
    'image' : 'brandoncox/tls-server',
    'args':  ["/usr/sbin/server", "-msg=test2"],
    ports: [
      {
        "containerPort": 9999,
        "protocol": "TCP"
      }
    ],
    'imagePullPolicy' : "Always"
  }];
  this.restartPolicy = "Always";
  this.dnsPolicy = 'ClusterFirst';
}

module.exports = Pod;


/**

apiVersion: v1
kind: Pod
metadata:
  annotations: { ... }
  labels:
    deployment: docker-registry-1
    deploymentconfig: docker-registry
    docker-registry: default
  generateName: docker-registry-1-
spec:
  containers:
  - env:
    - name: OPENSHIFT_CA_DATA
      value: ...
    - name: OPENSHIFT_CERT_DATA
      value: ...
    - name: OPENSHIFT_INSECURE
      value: "false"
    - name: OPENSHIFT_KEY_DATA
      value: ...
    - name: OPENSHIFT_MASTER
      value: https://master.example.com:8443
    image: openshift/origin-docker-registry:v0.6.2
    imagePullPolicy: IfNotPresent
    name: registry
    ports:
    - containerPort: 5000
      protocol: TCP
    resources: {}
    securityContext: { ... }
    volumeMounts:
    - mountPath: /registry
      name: registry-storage
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: default-token-br6yz
      readOnly: true
  dnsPolicy: ClusterFirst
  imagePullSecrets:
  - name: default-dockercfg-at06w
  restartPolicy: Always
  serviceAccount: default
  volumes:
  - emptyDir: {}
    name: registry-storage
  - name: default-token-br6yz
    secret:
      secretName: default-token-br6yz
**/
